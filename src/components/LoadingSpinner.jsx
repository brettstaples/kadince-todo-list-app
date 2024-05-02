import { RotatingLines } from "react-loader-spinner";

export default function LoadingSpinner() {
    return (
        <div className="m-3">
            <RotatingLines
                strokeColor="gray"
                strokeWidth="1"
                animationDuration="1"
                width="100"
                visible />
        </div>
    );
}
