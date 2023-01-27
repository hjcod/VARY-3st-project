import { sequelize } from "../models/index";
import { QueryTypes } from "sequelize";

export const searchWithEmail = async (email: string) => {
  const result = await sequelize.query(
    `SELECT DISTINCT
        u.id,
        u.email,
        TO_CHAR(u.created_at,'YYYY-MM-DD HH24:MI') as created_at,
        TO_CHAR(TO_TIMESTAMP(last_login / 1000), 'YYYY-MM-DD HH24:MI')as last_login,
        u.current_email_sent_number,
        u.current_webpage_view,
        sum(p.total_amount) as total_amount
      FROM tbl_user u
      JOIN tbl_payment_history as p
      ON email like '%${email}%' 
      AND u.deleted_at IS NULL
      GROUP by 
        u.id,
        u.email,
        u.created_at,
        last_login,
        u.current_email_sent_number,
        u.current_webpage_view`,
      {
        type: QueryTypes.SELECT,
      })
  return result;
};