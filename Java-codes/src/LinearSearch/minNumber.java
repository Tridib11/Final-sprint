package LinearSearch;

public class minNumber {
    public static void main(String[] args) {
        int[] arr={-1,2,3,-5,0};
        System.out.println(min_num(arr));
    }

    private static int min_num(int[] arr){
        int min=arr[0];
        for(int i=1;i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i];
            }
        }
        return min;
    }
}
