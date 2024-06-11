import { Minus, Trash2, Plus } from "lucide-react";

export function ProductCart(){

  return(
    <div className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg border border-zinc-400 hover:bg-zinc-100 transition">
      <img
					src='https://www.myimaginestore.com/media/mf_webp/jpeg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/a/i/air-gold_2.webp'
					alt='Macbook'
					className='w-[100px] h-[100px] rounded-lg aspect-square object-cover'
				/>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h6 className="text-ellipsis font-semibold flex-1">Macbook Pro M1 Pro 2024</h6>
            <Trash2 size={20} className="text-red-500 hover:text-red-700 transition" />
          </div>
          <div className="flex items-center gap-1 mb-2 bg-zinc-200 max-w-max p-1 rounded-lg">
            <Minus size={20} className='text-zinc-900' />
            <span className="text-zinc-500">1</span>
            <Plus size={20} className='text-zinc-900' />
          </div>
          <span className="flex-1 text-right font-medium">
            R$ 2,148.95
          </span>
        </div>
    </div>
  )
}