import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const items = [
    { to: "/dashboard", label: "Overview", end: true },
    { to: "/dashboard/orders", label: "Orders" },
    { to: "/dashboard/transactions", label: "Transactions" },
    { to: "/dashboard/earnings", label: "Earnings" },
    { to: "/dashboard/products", label: "Products" }
];
export default function DashSidebar() {
    const { seller, logout } = useAuth();
    const navigate = useNavigate();
    const handlelogout = () => {
        logout();
        navigate("/login");
    };
    const initials = seller?.ownerName
        ? seller.ownerName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
        : "?";
    return (
        <aside style={StyleSheet.sidebar}>
            <div style={styles.top}>
                <div style={styles.avatar}>
                    {initials}
                </div>
                <div style={{ minWidth: 0 }}>
                    <div style={styles.shopName}>{seller?.shopName || "My Shop"}</div>
                    <div style={styles.ownerName}>{seller?.ownerName}</div>
                </div>
            </div>
            <nav style={{flex:1,padding:"8px 0"}}>
                {items.map(item=>(
                    <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end || false}
                    style={({ isActive }) => ({ ...styles.item, ...(isActive ? styles.itemActive : {}) })}
                    >{item.label}</NavLink>
                ))}
            </nav>
            <div style={styles.bottom}>
                <button onClick={handlelogout} style={styles.logoutBtn}>Sign Out</button>
            </div>
        </aside>
    );
}
const styles = {
    sidebar: {width: 220,
    background: "linear-gradient(180deg, #3d2145 0%, #6b2875 100%)",
    color: "white", flexShrink: 0,
    position: "sticky", top: 68,
    height: "calc(100vh - 68px)",
    overflowY: "auto",
    display: "flex", flexDirection: "column",},
    
    top: {display:"flex",alignItems:"center",gap:12,padding:"24px 18px 20px",},
    
    avatar: {},
    
    shopName: {},
    
    ownerName: {},
    
    item: {},
    
    itemActive: {},
    
    bottom: {},
    
    logoutBtn: {}
};