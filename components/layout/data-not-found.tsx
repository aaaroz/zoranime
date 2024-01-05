import { Card, CardContent } from "@/components/ui/card";

export const DataNotFound = () => {
  return (
    <Card>
      <CardContent className="text-center py-10">
        <h1 className="text-3xl font-semibold">Data Not Found</h1>
        <p>Please try again! or you can check another page through this pagination below!</p>
      </CardContent>
    </Card>
  );
};
