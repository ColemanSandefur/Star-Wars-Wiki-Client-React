import { DocumentNode, useQuery } from "@apollo/client";
import "./ListCategory.scss";

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
            return <CategoryEntry key={data.id} onClick={props.onClick} id={data.id} text={data.name}/>
        } else if (data.title !== undefined) {
            return <CategoryEntry onClick={props.onClick} id={data.id} text={data.title}/>
        }

        return <CategoryEntry onClick={props.onClick} id={data.id} text={"Unknown"} />
    })

    return (
        <ul className="All-Categories">
            {formatted}
        </ul>
    )
}

function CategoryEntry(props: {onClick: (id: number) => void, id: number, text: string}) {
    return <li><span onClick={() => props.onClick(props.id)}>{props.text}</span></li>
}