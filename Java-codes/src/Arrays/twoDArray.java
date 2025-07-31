package Arrays;

import java.util.*;

public class twoDArray {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
//        int[][] arr={
//                {1,2,3},
//                {4,5},
//                {6,7,8,9}
//        };

        int[][] arr=new int[3][3];

        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length;j++){
                arr[i][j]=sc.nextInt();
            }
        }

        for (int[] ints : arr) {
            System.out.println(Arrays.toString(ints));
        }

    }
}
