import BlockSpinner from "./Spinners/BlockSpinner";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export default function StatsHistory({ historyStats }) {
    return (
        <>
            <Card>
                {historyStats ? (
                    <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Account Level History
                    </Typography>
                    {historyStats.map(historyItem =>{
                        return <div className="border-b-2">
                                <Typography>
                                    Season: {historyItem.season}
                                </Typography>
                                <Typography>
                                    Level: {historyItem.level}
                                </Typography>
                                </div>
                    })}
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
