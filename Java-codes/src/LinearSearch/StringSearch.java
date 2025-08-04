package LinearSearch;

public class StringSearch {
    public static void main(String[] args) {
        String s="Rohan";
        char c='a';
        System.out.println(search(s,c));
    }

    static boolean search(String str, char target){
        if(str.isEmpty()){
            return false;
        }

        for(int i=0;i<str.length();i++){
            if(str.charAt(i)==target){
                return true;
            }
        }
        return false;

    }
}
