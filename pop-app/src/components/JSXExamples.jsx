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
        {/* === 4. Lists และ Keys === */}
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>
                
                {/* ตัวอย่างที่ซับซ้อนขึ้น */}
                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'หนังสือพิมพ์', price: 25000, inStock: true },
                        { id: 2, name: 'E-Book', price: 590, inStock: true },
                        { id: 3, name: 'คอร์สเรียนพิเศษ', price: 1290, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* === 5. Fragment === */}
            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                {/* Fragment แบบเต็ม */}
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>
                
                {/* Fragment แบบย่อ */}
                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>
            
            {/* === 6. การจัดการ Events === */}
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="text" 
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                </select>
            </section>
            
            {/* === 7. Comments ใน JSX === */}
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    );
}

export default JSXExamples;