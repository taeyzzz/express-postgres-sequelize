const model = require('./src/db/models');
const Users = model.Users
const Roles = model.Roles

const run = async () => {
  try {
    const rowResult = await Roles.findAll()
    // console.log(rowResult);
    rowResult.map(data => {
      console.log(data);
    })
    // const result = await Users.create({
    //   email: "tkul@sertiscorp.com",
    //   roleId: 1
    // })
    // console.log(result.dataValues);
  }
  catch (err) {
    console.log(err);
  }
}

run()
