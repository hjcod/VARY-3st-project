import { sequelize } from "../models/index";
import { QueryTypes } from "sequelize";

export const searchByEmail = async (email: String) => {
  const search = await sequelize.query(
    `  	
    select
      email,
      TO_CHAR(u.created_at,'YYYY-MM-DD HH24:MI') as created_at,
      TO_CHAR(TO_TIMESTAMP(last_login / 1000), 'YYYY-MM-DD HH24:MI')as last_login,
      u.current_email_sent_number,
      u.current_webpage_view,
      p.total_amount
    from tbl_user u
    left join tbl_payment_history as p 
    on u.id = p.user_id
     WHERE email like '%${email}%'`,
    {
      type: QueryTypes.SELECT
    }
    )
};