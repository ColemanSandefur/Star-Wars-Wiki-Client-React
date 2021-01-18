import { DocumentNode, useQuery } from "@apollo/client";

export interface CategoryDataBase {
  [key: string]: any[]
}

interface ShowCategoryProps<V> {
  showCategoryVars: V,
  query: DocumentNode
}

//Displays all the information I have about the specific person
//'ShowPerson' will return all data ('Category' ex. name, vehicles, movies, etc.)
export default function ShowCategory<D extends CategoryDataBase, V>(props: ShowCategoryProps<V>) {
  /*
    Query graphQL
  */
	const { loading, data } = useQuery<D, V>(
		props.query,
		{variables: props.showCategoryVars}
	)

	if (loading) return <p>loading</p>
	if (data === undefined) return <p>Nothing Found</p>
  

  /*
    parse the data
  */
  let categories: JSX.Element[] = []

  let tmpData = Reflect.get(data, Object.keys(data)[0])[0];

  for (let property in tmpData) {
    //I don't want to display the typename
    if (property === "__typename") {
      continue;
    }

    let propVal = Reflect.get(tmpData, property);

    if (propVal === null) {
      continue;
    }

    if (propVal.length !== undefined && propVal.length === 0) {
      continue
    }

    categories.push(<Category key={categories.length} title={property} inputData={propVal} />)
  }
  
  return (
    <div>{categories}</div>
  )
}

//returns the text that should be displayed for 'Category'
export function getDisplay(inputData: any) {
  if (typeof inputData === "string") {
    //if is a date (regex)
    if (inputData.match("\\d+-\\d+-\\d+T\\d+:\\d+:\\d+.\\d+Z")) {
      let date = new Date(inputData);
      return date.toLocaleDateString()
    }

    return inputData;
  }

  //if it is a type from graphQL it will have a '__typename' property
  //films are the only type that doesn't have a 'name' property
  if (inputData.__typename !== undefined) {
    switch(inputData.__typename){
      case "Film":
        return inputData.title;
      default:
        return inputData.name
    }
  }
  
  //an emergency return statement to make sure that the data doesn't cause an error
  return JSON.stringify(inputData);
}

//Categories are groups of information like:
//  - vehicles they drove/owned
//  - name
//  - movies they were in
export function Category(props: {title: string, inputData: any}) {

  //all data will end up in displayData
  let displayData;

  //helper variable that will contain all entries for the category
  let tmpData: JSX.Element[] = []

  if (Array.isArray(props.inputData)){
    tmpData = props.inputData.map((data, index) => {
      return (
        <li key={index}>{getDisplay(data)}</li>
      )
    })
  } else {
    tmpData.push(<li key={0}>{getDisplay(props.inputData)}</li>);
  }

  displayData = (
    <ul>
      {tmpData}
    </ul>
  )

  return (
    <div className={"Category"}>
      <h3>{props.title}</h3>
      {displayData}
    </div>
  )
}