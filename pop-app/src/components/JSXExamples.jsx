import React from "react";
function JSXExamples() {
    const greeting = <h1>Hello, React with JSX</h1>
    const name = 'จารุเดช เปรื่องปรีชาสกุล';
    const age = 20;

    const currentYear = new Date().getFullYear();
    const user= {
        firstName: 'จารุเดช',
        lastName: 'เปรื่องปรีชาสกุล',
        age: 20,
        hobbies: ['อ่านหนังสือ', 'เล่นกีฬา', 'เขียนโปรแกรม'],
    };
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }
    const isLoggedIn = true;
    const hasNotifications = 3;
    return (
        <div className="jsx-examples">
            <h1>JSX Examples</h1>
            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ{name} อายุ{age}</p>
                <p>นี่คือปี {currentYear}</p>
                <p>ชื่อจริง: {formatName(user)}</p>
            </section>

            <section>
                <h2>การใช้เงื่อนไข</h2>
                {isLoggedIn ? (
                    <p>ยินดีต้อนรับ, {user.firstName}!</p>
                ) : (
                    <p>กรุณาเข้าสู่ระบบ</p>
                )}
            </section>
            <section>
                <h2>Attibutes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>
                <button onClick={() => alert('Button clicked!')}
                onMouseEnter ={() => console.log('Mouse entered')}>
                        Hover me or Click me! 
                </button>
            </section>
            <div style={{
                backgroundColor: '#E8F5E8',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '10px'
            }}>
            <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
            </p>

            </div>

            <section>
                <h2>🔀 Conditional Rendering</h2>
                <p>สถานะ: {isLoggedIn ? 'ออนไลน์':'ออฟไลน์'}</p>
                {hasNotifications > 0 && (
                    <div className="notification">
                        <p>คุณมี {hasNotifications} รายการ</p>
                    </div>  
                )}
                 {(() => {
                    if (user.age >= 18) {
                        return <p> {formatName(user)} คุณเป็นผู้ใหญ่</p>;
                    } else {
                        return <p> {formatName(user)} คุณยังไม่บรรลุนิติภาวะ</p>;
                    }
                })()}
            </section>
        </div>
            
    );
}

export default JSXExamples;