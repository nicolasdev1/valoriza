interface ICreateUserRequest {

   name: string
   email: string
   password: string
   admin?: boolean

}

export default ICreateUserRequest
