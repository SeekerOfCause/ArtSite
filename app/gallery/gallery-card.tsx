import { File } from "@google-cloud/storage";
import { Card, CardContent, CardHeader } from "@mui/material";


export default function GalleryCard(paintings: {fileName: string, fileContents: File}) {
    return (
        <Card>
            <CardHeader>
                {paintings.fileName}
            </CardHeader>

                <CardContent>
                </CardContent>
        </Card>
    )
}