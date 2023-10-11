import MultipleFileUpload from "@/component/Forms/MultipleFileUpload"
import { useState } from "react"
const Test = () => {
     const [data, setData] = useState([])
     const [error, setError] = useState({})

    return (
        <div className="inset-0 m-auto max-w-4xl h-96 flex justify-center items center flex-col gap-2">

        <MultipleFileUpload onFilesUploaded={setData} setErrors={setError} />
        {error.images && <p className="text-red-600 text-sm">{error.images}</p>}
        </div>

    )
}

export default Test