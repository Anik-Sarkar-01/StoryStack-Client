import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';



const FeaturedBlog = () => {
    const [featureBlogs, setFeatureBlogs] = useState([]);

    useEffect(() => {
        const fetchTopBlogs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/featured-blogs`);
            setFeatureBlogs(data);
        };
        fetchTopBlogs();
    }, []);

    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor((_, index) => index + 1, {
            id: 'index',
            header: 'Serial',

        }),
        columnHelper.accessor('title', {
            header: 'Title',
        }),
        columnHelper.accessor('category', {
            header: 'Category',
        }),
        columnHelper.accessor(row => row.author?.name, {
            header: 'Author',

        }),
        columnHelper.accessor('wordCount', {
            header: 'Total Words',
        }),
        columnHelper.accessor(row => row._id, {
            header: 'Action',
            cell: info => (
                <Link
                    to={`/blog/${info.getValue()}`}
                    className="btn"
                >
                    Details
                </Link>
            )
        })

    ];

    const table = useReactTable({
        data: featureBlogs,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="overflow-x-auto  border-base-content/5 bg-base-100 my-10">

            <table className="min-w-full table-auto border">
                <thead className="bg-[#FEF9E1]">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-2 text-left">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="border-t">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-4 py-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeaturedBlog;
