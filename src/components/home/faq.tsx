"use client"
import useSWR from "swr";
import FAQCard from "./faq-card"
import fetcher from "@/utils/fetcher";
import { API_URL } from "@/utils/config";

const FAQ: React.FC = () => {

    const { data: faqs } = useSWR(`${API_URL}/faq`, fetcher);

    if(!faqs) return <div>Loading FAQs...</div>;

    return (
        <div className="h-screen">
            <section className="max-w-5xl mx-auto py-2">
                <div className="flex items-center justify-center flex-col gap-y-2 py-5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Câu hỏi thường gặp</h2>
                </div>
                <div className="w-full px-7 md:px-10 xl:px-2 py-4">
                    <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
                        {
                            faqs.data.map((faq: IFAQProps, index: string) => (
                                <FAQCard key={index} targetId={index} question={faq.question} answer={faq.answer} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ