package Arrays;

import java.util.Arrays;

public class ZerosToTheBeginning {
    public static void main(String[] args) {
        int[] arr={0, 20, 0, -20, 0, 20};

        int j=-1;

        for(int i=arr.length-1;i>=0;i--){
            if(arr[i]==0){
                j=i;
                break;
            }
        }

        if(j!=-1){
            for(int i=j-1;i>=0;i--){
                if(arr[i]!=0){
                    swap(arr,i,j);
                    j--;
                }
            }
        }

        System.out.println(Arrays.toString(arr));
    }

    private static void swap(int[] arr, int i, int j) {
        int temp =arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }


}
