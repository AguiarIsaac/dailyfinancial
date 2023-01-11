import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://hashira:<senha>@apphashirafinancial.htl8caf.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)

const dbName = '@daily-financial'

export default function Connection() {
    async function main() {
      await client.connect()
      console.log('conexão deu certo karai')
    
      const db = client.db(dbName)
    
      const collection = db.collection('transactions')
    
      return 'done'
    }
    
    main()
      .then(console.log)
      .catch(console.error)
      .finally(() => client.close());

  }