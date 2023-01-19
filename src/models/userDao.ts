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
  WHERE deleted_at ISNULL AND last_login IS NOT NULL
  LIMIT ${limit} OFFSET ${offset}
  `;
  const [result] = await sequelize.query(query);
  return result;
};

export const getUserDetail = async (userId: string) => {
  const userInfo = await sequelize.query(
    `SELECT 
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
  const emailInfo = await sequelize.query(
    `SELECT
    ph.plan,
    u.current_email_sent_number,
    TO_CHAR(TO_TIMESTAMP(ps.schedule_at / 1000), 'YYYY-MM-DD HH24:MI') schedule_at,
    psa.amount amount
    FROM tbl_payment_history ph
    LEFT JOIN tbl_user u ON u.id = ph.user_id
    LEFT JOIN tbl_payment_schedule ps ON ps.customer_uid = u.id
       LEFT JOIN(
    	SELECT
    		customer_uid id,
    		amount 
    	FROM tbl_payment_schedule ps
    	WHERE is_back_to_free=false
    	 ) psa ON psa.id = u.id
    WHERE ph.type = 'EMAIL' AND ph.user_id = '${userId}' AND ph.status =TRUE AND ps.name LIKE '%발송%'
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
    psa.amount amount
    FROM tbl_payment_history ph
    LEFT JOIN tbl_user u ON u.id = ph.user_id
    LEFT JOIN tbl_payment_schedule ps ON ps.customer_uid = u.id
    LEFT JOIN(
    	SELECT
    		customer_uid id,
    		amount 
    	FROM tbl_payment_schedule ps
    	WHERE is_back_to_free=false
    	 ) psa ON psa.id = u.id
    WHERE ph.type = 'WEBPAGE' AND ph.user_id = '${userId}' AND ph.status =TRUE AND ps.name LIKE '%제공%'
    `,
    {
      type: QueryTypes.SELECT,
    }
  );
  const paymentInfo = await sequelize.query(
    `SELECT 
    u.payment_info_card_number,
    u.company_name,
    u.payment_info_business_license,
    u.payment_info_email,
    u.payment_info_phone,
    SUM(ph.total_amount) as total
    FROM tbl_user u
    LEFT JOIN tbl_payment_history ph ON ph.user_id = u.id
    WHERE ph.status = TRUE AND u.id = '${userId}'
    GROUP BY u.id
    `,
    {
      type: QueryTypes.SELECT,
    }
  );

  return { userInfo, emailInfo, webpageInfo, paymentInfo };
};
