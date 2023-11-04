import React from 'react'


const getTopics = async () => {
    const apiUrl = process.env.API_URL
    try {
        const res = await fetch(`${apiUrl}/api/topics`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};

export default async function Count() {
    const { topiclar } = await getTopics()
    return (
        <>
            <div className="absolute top-1 right-1 bg-red-600 text-[12px] text-white rounded-full px-1.5" >
                {topiclar.length}
            </div>
        </>

    )
}
