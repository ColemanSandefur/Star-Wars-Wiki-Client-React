import { DocumentNode, useQuery } from "@apollo/client";

interface Data {
    name?: string,
    title?: string,
    id: number
}
export interface ListCategoryDataBase {
    [key: string]: Data[]
}

export interface ListCategoryProps<V> {
    showCategoryVars: V,
    query: DocumentNode,
    onClick:(id: number) => void
}

export default function ListCategory<D extends ListCategoryDataBase, V>(props: ListCategoryProps<V>) {
    const { loading, data } = useQuery<D, V>(
        props.query,
        {variables: props.showCategoryVars}
    )

    if (loading) return <p>loading</p>
    if (data === undefined) return <p>Nothing Found</p>

    const formatted = Reflect.get(data, Object.keys(data)[0]).map((data: Data) => {
        if (data.name !== undefined) {
            return <li key={`${data.name}`} onClick={() => props.onClick(data.id)}>{data.name}</li>
        } else {
            return <li key={`${data.title}`} onClick={() => props.onClick(data.id)}>{data.title}</li>
        }
    })

    return (
        <ul>
            {formatted}
        </ul>
    )
}