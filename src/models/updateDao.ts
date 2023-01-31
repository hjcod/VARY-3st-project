import { sequelize } from "../models/index";
import { Request } from "../controllers/updateController";
import { QueryTypes } from "sequelize";


export const userDetail = async (data: Request) => {

  const transaction = await sequelize.transaction();
  try {
    await sequelize.query(
      `UPDATE tbl_user
        SET
          company_name = '${data.company_name}',
          company_size = '${data.company_size}',
          company_industry = '${data.company_industry}',
          company_position = '${data.company_position}'
        WHERE id = '${data.userId}'
      `,
      {
        type: QueryTypes.UPDATE,
      }
    )
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    console.log(error)
  }
};

export const emailPlan = async (data: Request) => {
  const transaction = await sequelize.transaction();
  try {
    await sequelize.query(
      `UPDATE tbl_payment_history
        SET
          plan = '${data.plan}'
        WHERE user_id = '${data.userId}' AND type = 'EMAIL' AND deleted_at IS NULL;
      `,
      {
        type: QueryTypes.UPDATE,
      }
    )
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    console.log(error)
  }
};

export const webPlan = async (data: Request) => {
  const transaction = await sequelize.transaction();
  try {
    await sequelize.query(
      `UPDATE tbl_payment_history
        SET
          plan = '${data.plan}'
        WHERE user_id = '${data.userId}' AND type = 'WEBPAGE' AND deleted_at IS NULL;
      `,
      {
        type: QueryTypes.UPDATE,
      }
    )
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    console.log(error)
  }
};


export const paymentDetail = async (data: Request) => {
  const transaction = await sequelize.transaction();
  try {
    await sequelize.query(
      `UPDATE tbl_user
        SET
          company_name = '${data.company_name}',
          payment_info_card_number = '${data.payment_info_card_number}',
          payment_info_business_license = '${data.payment_info_business_license}',
          payment_info_email = '${data.payment_info_email}',
          payment_info_phone = '${data.payment_info_phone}'
        WHERE id = '${data.userId}'
      `,
      {
        type: QueryTypes.UPDATE,
      }
    )
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    console.log(error)
  }
};