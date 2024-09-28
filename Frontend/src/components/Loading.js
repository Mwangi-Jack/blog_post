import React from 'react'


const Card = () => {
    return (
        <div class="my-10  h-90">
            <div className='w-72'>
                <div className="max-w-sm rounded overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="px-6 py-4">
                    <div className="h-6 bg-gray-300 mb-2"></div>
                    <div className="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 w-1/2"></div>
                </div>
                </div>
            </div>
        </div>
    )
}
function Loading() {
  return (
    <div className='mx-4 my-4 md:grid md:grid-cols-4 md:gap-16'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
		<Card />
    </div>
  )
}

export default Loading
