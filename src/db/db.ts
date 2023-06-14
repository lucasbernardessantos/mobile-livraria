import sqlite3 from "sqlite3"
import { open } from 'sqlite'

export class Database {
  private sqlite

  constructor() {
    this.sqlite = sqlite3.verbose()
  }

  connection() {
    try {
      // let db = new this.sqlite.Database('C:\\Users\\berna\\OneDrive\\Documentos\\Web\\back-end\\mobile-livraria\\biblioteca.db')

      // console.log(`Database conectada`)
      // console.log(db)
      // return db
      return open({
        filename: 'C:\\Users\\berna\\OneDrive\\Documentos\\Web\\back-end\\mobile-livraria\\db\\biblioteca.db',
        driver: sqlite3.Database
      })
    } catch (error) {
      console.log(error)
      return null
    }
  }
}