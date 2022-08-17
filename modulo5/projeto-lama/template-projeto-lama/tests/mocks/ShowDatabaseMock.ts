import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show} from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toShowDBModel = async (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }

        return showDB
    }

    public verifyDate = async (date: Date) => {
        switch (date.getDate()) {
            case 5:
                return {
                    id: "201",
                    band: "Foo Fighters",
                    starts_at: new Date("2022/12/05")
                } as IShowDB
            default:
                return undefined
        }
    }

    public createShow = async (show: Show) => {
        
    }

    public getShows = async (): Promise<IShowDB[] | undefined> => {
        const shows:IShowDB[] = [
            {
                id: "201",
                band: "Foo Fighters",
                starts_at: new Date("2022/12/05")
            },
            {
                id: "202",
                band: "System of a Down",
                starts_at: new Date("2022/12/06")
            },
            {
                id: "203",
                band: "Evanescence",
                starts_at: new Date("2022/12/07")
            },
        ]

        return shows
    }

    public getTickets = async (id:string) => {
        switch(id) {
            case "201":
                return 2
            default:
                return 0
        }
    }
}