import { sequelize } from "../models/index";
import { QueryTypes } from "sequelize";

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
        u.id,
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
        id,
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
        user_id,
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