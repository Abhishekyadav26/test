"use client";

import { Button } from "@/components/ui/button";


function Chaipage() {
    return (
        <main className="h-full min-h-screen flex justify-center items-center flex-col border-2">
            <div >Page</div>
            <button className="px-6 py-2 bg-blue-500 rounded-lg my-3 hover:bg-blue-700">Test button</button>
            <Button variant="outline" size="lg">shadcn button</Button>
        </main>
        
    )
}

export default Chaipage;