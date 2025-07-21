"use client";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const param = "query";
  const pathname = usePathname();
  const { replace } = useRouter();
  console.log({pathname, firstParam: param});

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(param, term);
    } else {
      params.delete(param);
    }
    replace(`${pathname}?${params.toString()}`);
    console.log({term, params: params.toString(), replacePath: `${pathname}?${params.toString()}`});
  }

  const removeSearchString = () => {
    const searchInput = document.getElementById("search") as HTMLInputElement;
    searchInput.value = '';
    replace(pathname);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get(param)?.toString()}
      />
      <TrashIcon onClick={removeSearchString} className="h-[20px] w-[20px] mt-2.5 ml-2 cursor-pointer" />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
