import app from './app'

const port: string | number = process.env.PORT || 7001
app.listen(port, (): void => console.log(`☄️ Server is running in port ${port}...`))
