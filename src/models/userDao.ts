import { sequelize } from "../models/index";
import { QueryTypes } from "sequelize";

export const getUserInfo = async (page:number) => {
  const offset = page * 10
  const limit = 10
  const query = 
  `SELECT 
   id,
   email,
   TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI')
   created_at,TO_CHAR(TO_TIMESTAMP(last_login / 1000), 'YYYY-MM-DD HH24:MI') 
   last_login,
   current_email_sent_number as total_email_number,
   current_webpage_view as total_webpage_view, a.total
  FROM tbl_user
  LEFT JOIN (
    SELECT
    user_id as uid,
    SUM (total_amount) as total
  FROM tbl_payment_history
  WHERE status = TRUE
  GROUP BY user_id) as a ON a.uid = tbl_user.id
  WHERE deleted_at ISNULL AND last_login IS NOT NULL AND deleted_at IS NULL
  LIMIT ${limit} OFFSET ${offset}
  `;
  const [result] = await sequelize.query(query);
  return result;
};

export const getUserInfoByEmail = async(email:string) => {
  const query = 
  `SELECT
    id,
    password,
    email,
    is_admin,
    username
  FROM tbl_user
  WHERE email = '${email}'`
  
  const [result]= await sequelize.query(query)
  return result
};

export const getUserDetail = async (userId: string) => {
  const userInfo = await sequelize.query(
    `SELECT
        id,
        email,
        is_admin,
        status,
        TO_CHAR(created_at,'YYYY-MM-DD HH24:MI') created_at,
        TO_CHAR(TO_TIMESTAMP(last_login / 1000), 'YYYY-MM-DD HH24:MI') last_login,
        company_name,
        company_size,
        company_industry,
        company_position
      FROM tbl_user
      WHERE id = '${userId}'`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return userInfo[0];
};

export const getServiceInfo = async (userId: string) => {
  const emailInfo = await sequelize.query(
    `SELECT
        ph.plan,
        u.current_email_sent_number,
        TO_CHAR(TO_TIMESTAMP(ps.schedule_at / 1000), 'YYYY-MM-DD HH24:MI') schedule_at,
        ps.amount
      FROM tbl_payment_history ph
      LEFT JOIN tbl_user u ON u.id = ph.user_id
      LEFT JOIN tbl_payment_schedule ps ON ps.customer_uid = u.id
      WHERE ph.type = 'EMAIL' AND ph.user_id = '${userId}'
    `,
    {
      type: QueryTypes.SELECT,
    }
  );

 
  const webpageInfo = await sequelize.query(
    `SELECT
        ph.plan,
        u.current_webpage_view,
        TO_CHAR(TO_TIMESTAMP(ps.schedule_at / 1000), 'YYYY-MM-DD HH24:MI') schedule_at,
        ps.amount
      FROM tbl_payment_history ph
      LEFT JOIN tbl_user u ON u.id = ph.user_id
      LEFT JOIN tbl_payment_schedule ps ON ps.customer_uid = u.id
      WHERE ph.type = 'WEBPAGE' AND ph.user_id = '${userId}'
    `,
    {
      type: QueryTypes.SELECT,
    }
  );
  return { emailInfo, webpageInfo };
}


export const getPaymentInfo = async (userId: string) => {

  const paymentInfo: any = await sequelize.query(
    `SELECT
        payment_info_card_number,
        company_name,
        payment_info_business_license,
        payment_info_email,
        payment_info_phone
      FROM tbl_user
      WHERE id = '${userId}'`,
    {
      type: QueryTypes.SELECT,
    }
  )
  
  const paymentDetail = await sequelize.query(
    `SELECT
        TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI') created_at,
        type,
        plan,
        total_amount,
        real_amount,
        is_paid
      FROM tbl_payment_history
      WHERE user_id = '${userId}'`,
    {
      type: QueryTypes.SELECT,
    }
  )
  paymentInfo[0].payment_record = paymentDetail
  return paymentInfo[0];
}