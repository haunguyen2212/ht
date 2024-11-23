"use client"
import FAQCard from "./faq-card"

const FAQ: React.FC = () => {

    return (
        <div className="h-screen">
            <section className="max-w-5xl mx-auto py-2">
                <div className="flex items-center justify-center flex-col gap-y-2 py-5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Câu hỏi thường gặp</h2>
                </div>
                <div className="w-full px-7 md:px-10 xl:px-2 py-4">
                    <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
                        <FAQCard targetId="1" question="Tại sao tôi lại gặp phải lỗi trang hoặc thông báo 404 Not Found khi truy cập vào blog?" answer="Lỗi 404 Not Found thường xuất hiện khi trang web mà bạn đang cố gắng truy cập không còn tồn tại hoặc đã bị di chuyển mà không cập nhật liên kết. Điều này có thể xảy ra do sự thay đổi cấu trúc URL hoặc nếu bài viết đã bị xóa. Để khắc phục, bạn có thể kiểm tra lại URL có chính xác không, sử dụng chức năng tìm kiếm trên trang để tìm nội dung liên quan hoặc quay lại trang chủ để tìm thông tin mới nhất." />
                        <FAQCard targetId="2" question="Làm thế nào để tìm kiếm thông tin cụ thể trên blog một cách hiệu quả?" answer="Để tìm kiếm thông tin cụ thể trên blog hiệu quả, bạn nên sử dụng thanh tìm kiếm có sẵn và nhập các từ khóa chính xác liên quan đến chủ đề bạn quan tâm. Hãy thử sử dụng các từ khóa rõ ràng và cụ thể để thu hẹp phạm vi tìm kiếm. Ngoài ra, nếu blog có chức năng lọc theo danh mục hoặc ngày tháng, bạn có thể sử dụng các tính năng này để tìm kiếm nhanh chóng và chính xác hơn." />
                        <FAQCard targetId="3" question="Tại sao trang web tải chậm và làm thế nào để cải thiện tốc độ tải trang?" answer="Tốc độ tải trang có thể bị ảnh hưởng bởi nhiều yếu tố, bao gồm kích thước và số lượng hình ảnh trên trang, mã JavaScript nặng, và tốc độ máy chủ. Để cải thiện tốc độ tải, bạn có thể thử xóa bộ nhớ cache và cookies trong trình duyệt, sử dụng kết nối internet nhanh hơn, hoặc truy cập trang trong thời điểm mạng ít bận rộn hơn. Chủ sở hữu blog cũng có thể cần xem xét tối ưu hóa nội dung và cấu trúc mã nguồn để trang tải nhanh hơn." />
                        <FAQCard targetId="4" question="Blog có hỗ trợ đa ngôn ngữ không và làm thế nào để chuyển đổi ngôn ngữ?" answer="Nếu blog hỗ trợ đa ngôn ngữ, bạn thường sẽ tìm thấy một menu hoặc tùy chọn để chọn ngôn ngữ ở đầu trang hoặc cuối trang. Để chuyển đổi ngôn ngữ, chỉ cần nhấp vào tùy chọn ngôn ngữ bạn muốn và trang web sẽ tự động cập nhật để hiển thị nội dung bằng ngôn ngữ đã chọn. Nếu không thấy tùy chọn này, có thể blog chưa hỗ trợ đa ngôn ngữ. Trong trường hợp này, bạn có thể sử dụng các công cụ dịch trực tuyến như Google Translate để dịch nội dung trang web sang ngôn ngữ mong muốn." />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ