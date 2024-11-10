interface IProps {
    userAgentFromServer: string
}
const DisableJS = ({ userAgentFromServer }: IProps) => {

    return (
        <div>
            <noscript>
                <div className="flex font-mono font-semibold text-sm">
                    <div className="border p-2">UserAgent</div>
                    <div className="border p-2">{userAgentFromServer}</div>
                </div>
            </noscript>
        </div>
    )
}
export default DisableJS;