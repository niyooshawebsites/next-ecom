import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const OrdersPage = () => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Resent orders from your store!</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-medium">Babai Bose</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  test@test.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell className="text-green-500">Successful</TableCell>
              <TableCell>2024-06-15</TableCell>
              <TableCell className="text-right">$250.73</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-medium">Roger Federer</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  roger@gmail.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell className="text-red-500">Failed</TableCell>
              <TableCell>2024-06-15</TableCell>
              <TableCell className="text-right">$112.61</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersPage;
