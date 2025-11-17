import React from 'react'
import PostItem from './PostItem'
import { HiOutlineXCircle } from "react-icons/hi";

function PostModal({post}) {
  return (
    <div>
        <dialog id="my_modal_1" className="modal-middle">
        <div className="modal-box ">
          <div className='modal-action'>
            <form method="dialog">
            
              <button className='absolute right-2 top-2'>
              <HiOutlineXCircle className='text-[22px] text-white'/>
              </button>
              <PostItem post={post}/>
            </form>
          </div>
        </div>
        </dialog>
    </div>
  )
}

export default PostModal