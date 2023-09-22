import { Blocks } from "react-loader-spinner";

export default function BlockSpinner() {
    return (
        <Blocks
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
        />
    )
}
