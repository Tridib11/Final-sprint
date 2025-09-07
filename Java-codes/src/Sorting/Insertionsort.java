package Sorting;

import java.util.Arrays;

public class Insertionsort {
    public static void main(String[] args) {
        int[] arr={2,1,0,4,3};
        System.out.println(Arrays.toString(insertion(arr)));
    }

    public static int[] insertion(int[] arr){
        for(int i=0;i<arr.length-1;i++){
            for(int j=i+1;j>0;j--){
                if(arr[j]<arr[j-1]){
                    swap(arr,j,j-1);
                }
            }
        }
        return arr;
    }

    public static void swap(int[] arr,int start,int end){
        int temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
    }
}
