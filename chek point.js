function chekpointalgo(n) {
    var A=1
    var B=n.length-1
      for (var i=0;i<n.length;i++)
        {
          if (n[i]==' ')
          {
            B-=1
            A+=1           
          }
          
        }
    console.log(B)
      return(A)
    }
    console.log(chekpointalgo('Bonjour les amis.'))