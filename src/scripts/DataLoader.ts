import { IGameCard } from "./Interfaces/IGameCard";
import { data } from './data'
export class DataLoader {
    constructor(private url: string) {
        this.url = url
    }
    //для тестирования
    static getMockData: () => IGameCard[] = () => data

    async fetchData(): Promise<IGameCard[]> {
        try {
            const res = await fetch(this.url)
            if (res.ok) {
                const data: IGameCard[] = await res.json()
                return data
            } else {
                throw new Error('Failed to fetch data')
            }
        }
        catch (error: any) {
            console.error('Error fetching data:', error)
            return []
        }
    }
}