import BlockSpinner from "./Spinners/BlockSpinner";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export default function CurrentStats({ playerName, currentStats }) {
    return (
        <>
            <Card className="w-fit">
                {currentStats ? (
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {playerName}
                        </Typography>
                        <Typography>
                            Season: {currentStats.season}
                        </Typography>
                        <Typography>
                            Level: {currentStats.level}
                        </Typography>
                    </CardBody>
                )
            :
            (
                <BlockSpinner />
            )}
            </Card>
        </>
    )

}
