type sortOrderType = "INC" | "DCR" | undefined

type sortType = {
    name: "Price" | ""
    type: sortOrderType
}

type ListShortComponentProps = {
    onSelectSort?: (by: string) => void
    sortType?: sortType
}


type FlightItemProps = {
    index: number
    onPressFlight?: (data: any) => void
}

