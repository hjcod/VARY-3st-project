import { sequelize } from "../models/index";
import { reqBody } from "../controllers/updateController";
import { QueryTypes } from "sequelize";

export const userDetail = async (data: reqBody) => {
  const id = data.userId
  const companyName = data.company_name
  const companySize = data.company_size
  const companyInsdustry = data.company_industry
  const companyPosition = data.company_position

  const transaction = await sequelize.transaction();
  try {
    await sequelize.query(
      `UPDATE tbl_user
        SET
          company_name = '${companyName}',
          company_size = '${companySize}',
          company_industry = '${companyInsdustry}',
          company_position = '${companyPosition}'
        WHERE id = '${id}'
      `,
      {
        type: QueryTypes.SELECT,
      }
    )
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    console.log(error)
  }
};
