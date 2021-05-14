type Repository = {
    name: string
}

export default async function (userName: string): Promise<Repository[]> {
    return [
        {
            name: `${userName}_1`,
        },
        {
            name: `${userName}_2`,
        },
    ]
}