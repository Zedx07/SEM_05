import java.rmi.*;

// Remote interface for our application
public interface checkBal extends Remote {

    public double checkBalance(String acc_no, String password) throws RemoteException;

}
