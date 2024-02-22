type state = {
    status: statusTypes,
    flightList: Array<any>
    error: string | undefined
}

type statusTypes = "idle" | "loading" | "succeeded" | "failed" 