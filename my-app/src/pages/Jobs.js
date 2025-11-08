function Jobs() {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Recommended Jobs</h2>
  
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "2rem"
        }}>
          <div style={{
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "20px"
          }}>
            Warehouse Associate
          </div>
  
          <div style={{
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "20px"
          }}>
            Construction Helper
          </div>
  
          <div style={{
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "20px"
          }}>
            Delivery Driver
          </div>
        </div>
      </div>
    );
  }
  
  export default Jobs;