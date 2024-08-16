
import { useEffect } from 'react';
import { useSearchParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import { STRIPE_PAYMENT_SUCCESS } from '../utility/api';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const PaymentSuccess = () => {
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    let session_id = searchParams.get("session_id");
    let package_id = searchParams.get("package_id");

    useEffect(() => {
     const updateOrder = async () => {
           try {
               let response = await axios.get(`${STRIPE_PAYMENT_SUCCESS}?session_id=${session_id}&package_id=${package_id}`);
             navigate("/dashboard?payment=success");
           } catch (error) {
            navigate("/dashboard?payment=failed");
           }
        }
        if (session_id && package_id) {
            updateOrder();
        } else {
            navigate("/dashboard?payment=failed");
        }
    }, []);
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <h1>Loading page...</h1>
        <h5>Dont close this page or refresh</h5>
      </div>
    );
}

export default PaymentSuccess;