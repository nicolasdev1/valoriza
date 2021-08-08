import { Compliment } from '../entities'

interface IComplimenRepository {
   findByUserReceiver(user_id: string): Promise<Compliment[]>
   findByUserSender(user_id: string): Promise<Compliment[]>
}

export default IComplimenRepository
