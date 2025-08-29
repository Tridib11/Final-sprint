package Arrays;

public class Pascal2 {
    public static void main(String[] args) {
        int rowIndex=4;
        pascalRow(rowIndex);
    }

    public static void pascalRow(int r) {
        for (int c = 1; c <= r; c++) {
            System.out.print(nCr(r-1, c-1) + " ");
        }
        System.out.println(); // row end pe new line
    }

    // Function to compute nCr
    public static int nCr(int n, int r) {
        int res = 1;
        for (int i = 0; i < r; i++) {
            res = res * (n - i);
            res = res / (i + 1);
        }
        return res;
    }
}
