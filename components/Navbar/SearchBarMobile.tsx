import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";

function SearchBarMobile() {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-[50px] md:hidden">
        <Button asChild variant="outline" className="w-[50px]">
          <Search size={64} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="md:text-md">What or who are you looking for?</DialogTitle>
        </DialogHeader>
        <Label className="opacity-80">Search for videos and creators</Label>
        <Input placeholder="Type to search..." autoFocus />
        <DialogTrigger>
          <DialogFooter>
            <Button type="button" variant="secondary">
              Search
            </Button>
          </DialogFooter>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
}

export default SearchBarMobile;
