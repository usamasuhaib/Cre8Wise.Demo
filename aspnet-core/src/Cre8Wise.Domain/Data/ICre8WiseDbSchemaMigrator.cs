using System.Threading.Tasks;

namespace Cre8Wise.Data;

public interface ICre8WiseDbSchemaMigrator
{
    Task MigrateAsync();
}
