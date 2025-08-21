"use client";
import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/store/slices/filterSlice";
import { RootState } from "@/store/store"; 
import { AppDispatch } from "@/store/store";

export default function Searchbar() {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.filters.search);

  return (
    <div className="relative">
      <div className="absolute top-2 left-1">
        <IconSearch size={20} className="text-subheading" />
      </div>
      <input
        type="text"
        value={search}
        placeholder="Search by issue name..."
        className="border border-border text-subheading placeholder:text-subheading rounded-lg pl-8 py-1"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}
